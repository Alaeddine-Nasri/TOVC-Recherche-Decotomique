#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "fonctions.h"
#include <time.h>




void aff_entete(F*fp ,long val)
{
       fp->entete.nb_db=val;

   }
   //*********************************************************************
long entete(F *fp)
{
 return(fp->entete.nb_db);

}
//*********************************************************************
void liredir(F *fp, int i , Buffer *buf)
{
   if(i <= entete(fp))
   {
       fseek(fp->file,(sizeof(Entete)+sizeof(Tbloc)*(i-1)),SEEK_SET); // positionnement au debut du bloc numero i
       fread(buf,sizeof(Buffer),1,fp->file);                         //lecture d'un bloc de caractère correspondant a la taille du bloc dans le buffer
       rewind(fp->file);
   }
                                        // repositionnement endebut de fichier

}

//**********************************************************************
void ecriredir(F*fp, int i, Buffer *buf)
{

     fseek(fp->file,sizeof(Entete)+sizeof(Tbloc)*(i-1),SEEK_SET);
     fwrite(buf,sizeof(Buffer),1,fp->file);

}
//***********************************************************************
void fermer(F *f)
{

    rewind(f->file);
    fwrite(&(f->entete), sizeof(Entete), 1, f->file);
    fclose(f->file);
    free(f);
}
//***********************************************************************
int  ouvrir(char nom_fichier[], char mode , F**fp)
{

    *fp=malloc(sizeof(F));                      // allocation  de la structure
    Buffer buf;
    if( (mode=='A') ||  (mode == 'a') ){
        (*fp)->file=fopen(nom_fichier ,"rb+");
        if ((*fp)->file != NULL)
        {
            fread(&( (*fp)->entete),sizeof(Entete),1,(*fp)->file);
            return 1;
        }
        else return 0;
    }
    else
    {
        if( (mode=='N') ||  (mode == 'n') )
        {
             (*fp)->file=fopen(nom_fichier,"wb+");
             if ((*fp)->file != NULL)
             {
             aff_entete(*fp,0);
             fwrite(&( (*fp)->entete),sizeof(Entete),1,(*fp)->file);
             sprintf(buf.tab,"%s","");
             ecriredir(*fp,1,&buf);
             return 1;
             }
             else return 0;


        }
        else
        {
            printf("format d'ouverture impossible");
            return 0;
        }
    }
}


//***********************************************
  /* void  alloc_bloc(F *fp )
{
        Buffer *buf=malloc(sizeof(Buffer));
         sprintf(buf->tab,"%s","");
         sprintf(buf->cle1 ,"%s","");
         sprintf(buf->cle2 ,"%s","");
         sprintf(buf->pos_libre ,"%d",1);
         ecriredir(fp,entete(fp)+1,buf);
        aff_entete(fp ,entete(fp)+1);
}
*/
//****************************************************************************
//void Alloc_bloc(F* fichier){
   // Aff_Entete(fichier , Entete(fichier)+1);
    //}
//******************************************************************************

void genere(){
       FILE *f;
    //ouvrir("test.txt","wd+",&f);

    Buffer buff;
    int i=0,ch = 0,enrg=0,j=0;
    int taille = 0,cle= 0;
    char scle[10],staille[3];
    printf("entre la taille des enrg!");
    scanf("%d",&enrg);


   for(i = 0 ; i<enrg;i++){
        taille = rand()%512 + 1;
        printf(" la taille %d \n",taille);
        if( ch + 14 + taille <512 ){
            ch = ch + taille + 14;
            /** Taille + cle + 'F' **/
            num_to_string(taille,3,staille);
            sprintf(buff.tab,"%s",staille);
            sprintf(buff.tab,"%c",'F');
            cle++;
            num_to_string(cle,10,scle);
            sprintf(buff.tab,"%s",scle);
            /**   Data!   **/
            //printf("here!");
          //  sprintf(buff.tab,"%c",'F');
          //  printf("%c",buff.tab[j]);
        }
        else{

        }
   }
   // j= 0;
  //  for(i = 0 ; i<enrg;i++){

    //    printf("%c",buff.tab[j]);
    //    j++;
     //   if (j == 4){j = 0;}
        //printf("%d \n",nb_en);
        //if (i<=taille){
       // buff.tab[i]= 'a';
        //}


  // }

  // printf("nice \n");
  // for(i = 0 ; i<10;i++){
    //    printf("%c",buff1.tab[i]);
 //  }
}





  // buff.tab[j] = (taille/100);
         //   printf("%d",buff.tab[j]);
           // j = j +1;
         //   buff.tab[j] = (taille%100)/10;
         //   printf("%d",buff.tab[j]);
          //  j++;
         //   buff.tab[j] = (taille%10);
          //  printf("%d",buff.tab[j]);
      //      j++;
       //     buff.tab[j] = 'F';
            //printf("%c",buff.tab[j]);
void num_to_string(int num, int max, char * s)  // fonction qui tranforme un entier en chaine de characteres
{
    char s_num[10];

    sprintf(s_num,"%d",num);

    int j = max - strlen(s_num) ;
    sprintf(s,"%s","");
    while (j > 0) {sprintf(s,"%s0",s);j--;}
    sprintf(s,"%s%s",s,s_num);
}

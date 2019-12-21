#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include<stdio.h>
#include<conio.h>
#include "fonctions.h"
#include <time.h>
#include <windows.h>







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
    Tbloc buf;
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

void genere(char nom[20]){
       F *f;
       //char nom[3];
    ouvrir(nom,'N',&f);

    Buffer buff;
    Buffer buff2;
    Tbloc buf;
    int i=0,ch = 0,enrg=0,j=0,neww=1;
    int taille = 0,cle= 0;
    int k = 0;
    int a=0;
    int dir = 1;
    char scle[11],staille[3],sdata[498];
    sdata[0] = '\0';
    printf("\tentre la taille des enrg \n");
    scanf("%d",&enrg);
    sprintf(buff.tab,"%s","");


   for(i = 0 ; i<enrg+1;i++){
        if (ch ==0){
            buff.cle_inf = cle+1;
        }
        if (neww==1){
        taille = rand()%300 + 1;}
        if( ch + 14 + taille <512 ){  //Non chauvauchement
            ch = ch + taille + 14;
            neww = 1;

            /** Taille + cle + 'F' **/

            num_to_string(taille,3,staille);
            sprintf(buff.tab,"%s%s",buff.tab,staille);
            sprintf(buff.tab,"%s%c",buff.tab,'F');
            cle++;
            num_to_string(cle,10,scle);
            sprintf(buff.tab,"%s%s",buff.tab,scle);

            /**   Data!   **/

            sdata[0] = '\0';
            rand_string(taille-1,sdata);
            sprintf(buff.tab,"%s%s",buff.tab,sdata);
        }
        else{
                //printf("\n**********new bloc*******************\n ");
            i = i -1;
            neww = 0;
            buff.pos_libre = ch+1;
            buff.cle_sup = cle;
            ch = 0;
            ecriredir(f,dir,&buff);
            dir ++;
            aff_entete(f , dir-1);
            sprintf(buff.tab,"");
            }
   }
    printf("\tUn fichier avec le nom : ");
    color(2,0);
    printf("%s",nom);
    color(15,0);
    printf(" d'un nombre de bloc = ");
    color(2,0);
    printf("%d",entete(f));
    color(15,0);
    printf(" et un nombre d'enreg = ");
    color(2,0);
    printf("%d",enrg);
    color(15,0);
    printf(" a etes cree\n\tMerci!\n\n\n");
        fermer(f);
}
void affichage(char nom[30]){
    F *f;
    ouvrir(nom,'A',&f);
    Buffer buff2;
    int j = 0,a = 0;
    a = entete(f);
    for(j=1;j<a+1;j++)
            {
            liredir(f,j,&buff2);
            printf("\t\n ************************** Block numero %d ***********************\n",j);
            color(2,0);
                printf("\tBuffer tab est = ");
                color(5,0);
                printf("%s\n",buff2.tab);
                color(2,0);
                printf("\tPoslibre is lekher  = ");
                color(5,0);
                printf("%d\n",buff2.pos_libre);
                color(2,0);
                printf("\tCle sup de bloc est = ");
                color(5,0);
                printf("%d\n",buff2.cle_sup);
                color(2,0);
                printf("\tCle inf de bloc est = ");
                color(5,0);
                printf("%d\n",buff2.cle_inf);
                color(15,0);
            }
}
void recheche_deco(char nom[30])
{
     F *f;
    ouvrir(nom,'A',&f);
    Buffer buff;
    char staille[]= "",scle[10];
    int taille = 0,cle = 0;int done = 0;int debut = 0;
    int nbloc=10;
    int i =0;
    int details = 0;
    int rcle=0;
    int j=0;
    int k = 0;
    int deco = 0,max =0,min=0;
    bool trouv = false;
    nbloc = entete(f);
    printf("this is l'entete reche %d\n", nbloc);
    liredir(f,nbloc,&buff);
    printf("Donner la cle a recherche!\n");
    scanf("%d",&rcle);
    if(rcle> buff.cle_sup || rcle< 1){printf("n'existe pas");}
    else{
    deco = nbloc/2;
    max = nbloc;
    min = 0;
    while( !trouv && i != 512){
        liredir(f,deco,&buff);
        if (rcle > buff.cle_sup){
            min = deco;
            deco = (max + min)/2;
        }
        else if (rcle < buff.cle_inf){
            max = deco;
            deco = (max + min) / 2;
        }
        else {
            k = 0;
            j = 0;
            done = 0;
            debut = 0;
            while (done != 1){
                j = debut;
            staille[0] = buff.tab[debut];
            staille[1] = buff.tab[debut+1];
            staille[2] = buff.tab[debut+2];
            staille[3] = '\0';
            taille = atoi(staille);
            k = 0;
            for(j=debut +4;j<debut +14;j++)
                {
                    scle[k] = buff.tab[j];
                    k++;
                }
            scle[10] = '\n';
            cle = atoi(scle);
            if (rcle==cle){
                j = debut;
                if (buff.tab[debut+3]=='F'){
                color(2,0);
                printf("\tLe numero du bloc est = ");
                color(5,0);
                printf("%d\n",deco);
                color(2,0);
                printf("\tLa position j est = ",j);
                color(5,0);
                printf("%d\n",j);
                color(15,0);
                printf("\n");
                printf("\tif you want more details press 1 \n");
                scanf("%d",&details);
                if (details == 1){
                color(2,0);
                printf("\n\t*********** More details *************\n");
                printf("\ttaillle de la donnee est = ");
                color(5,0);
                printf("%d\n",taille);
                color(2,0);
                printf("\tcle est = ");
                color(5,0);
                printf("%d\n",cle);
                color(2,0);
                printf("\tBuffer tab est = ");
                color(5,0);
                liredir(f,deco,&buff);
                printf("%s\n",buff.tab);
                color(15,0);
                }
                }
                else{printf("la donnee existe mais elle est effacee\n");}
                done = 1;
            }
            else if(cle>rcle){printf("N'existe pas");done = 1;}
            else{debut = debut + taille+ 14;}
            trouv = true;
        }
        }
    }
    }
}


void num_to_string(int num, int max, char * s)  // fonction qui tranforme un entier en chaine de characteres
{
    char s_num[10]="";

    sprintf(s_num,"%d",num);

    int j = max - strlen(s_num) ;
    sprintf(s,"%s","");
    while (j > 0) {sprintf(s,"%s0",s);j--;}
    sprintf(s,"%s%s",s,s_num);
}
void rand_string(int taille, char * s){

    int i= 0;int longueurChaine;
    char chaine[] = "Z";   //&[](){}/\-_*abcdefghijklmnpqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890

    longueurChaine = strlen(chaine);

    for(i=0; i < taille+1; i++)
        {
            s[i] = chaine[rand()%longueurChaine];
        }
    s[taille+1]= '\0';
    //printf("%s", s);
}
void color(int t,int f)
{
        HANDLE H=GetStdHandle(STD_OUTPUT_HANDLE);
            SetConsoleTextAttribute(H,f*16+t);
}






































































  //      k = 0;
          //      printf("\n this is s taille %s \n",staille);
           /**     for(j=4;j<14;j++)
                {
                    scle[k] = buff2.tab[j];
                    k++;
                }
                cle = atoi(scle);**/
             //   printf("\n this is scle %s \n",scle);
              /*  k = 0;
                for(j=0;j<3;j++){
                    staille[k] = buff2.tab[j];
                    k++;
                }
                printf("\n this is s taille %s \n",staille);
                taille = atoi(staille);*/
           //     printf("\nthis is cle dhuka ! %d this is staille \n",cle);
               // printf("tab is %s \n",buff2.tab);













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


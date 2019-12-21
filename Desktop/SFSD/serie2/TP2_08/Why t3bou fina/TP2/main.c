#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include <conio.h>
#include "fonctions.c"

int main()
{

    srand(time(NULL));
    char nom[20];
    int choix= 1;
    while ((choix == 1)||(choix == 2)||(choix == 3)){
            printf("\n\n\n");
    printf("\t\t\t***************************************************************************\n");
    printf("\t\t\t**                      1/Generez un fichier                             **\n");
    printf("\t\t\t**          2/Afficher les Buffer du fichier cree par genere()           **\n");
    printf("\t\t\t**                3/Chercher une cle dans le fichier                     **\n");
    printf("\t\t\t**                             4/Exit                                    **\n");
    printf("\t\t\t***************************************************************************\n");
    printf("\n\t\t\t**************************Chose from 1 to 4******************************\n");
    scanf("%d",&choix);
    if (choix ==1 ){
        printf("\tEntrez le nom");
        scanf("%s",nom);
        genere(nom);
    }
    if (choix ==2 ){
        affichage(nom);
        printf("\n");
    }
    if (choix ==3 ){
        recheche_deco(nom);
        printf("\n");
    }
    }


 //   rand_string(i,s);
 //   num_to_string(12,10,s);
  //  printf("%s",s);
    return 0;
}

#ifndef FONCTIONS_H_INCLUDED
#define FONCTIONS_H_INCLUDED


#include <stdbool.h>





typedef struct Tbloc //* structure d'un bloc
{
   char tab[512];
   int pos_libre ;
   char cle1[11] ;
   char cle2[11];

}
Tbloc;

typedef struct Tbloc Buffer ;
typedef struct Entete {

	   long nb_db ;

	} Entete;

typedef struct F
{
      FILE *file;
    Entete entete;
}
F ;

void aff_entete(F*fp ,long val);
long entete(F *fp);
void liredir(F *fp, int i , Buffer *buf);
void ecriredir(F*fp, int i, Buffer *buf);
void fermer(F *f);
int  ouvrir(char nom_fichier[], char mode , F**fp);
//void Alloc_bloc(F* fichier);
void genere();





#endif // FONCTIONS_H_INCLUDED
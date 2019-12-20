#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "fonctions.c"

int main()
{

    srand(time(NULL));
    printf("Hello world!\n");
    char nom[20];
     printf("entre le nom");
    scanf("%s",nom);
    genere(nom);

    recheche_deco(nom);
 //   rand_string(i,s);
 //   num_to_string(12,10,s);
  //  printf("%s",s);
    return 0;
}

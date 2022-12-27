export default {
  actions: {
    create: 'Créer',
    edit: 'Éditer',
    delete: 'Effacer',
    submit: 'Soumettre',
    cancel: 'Annuler',
    close: 'Proche',
  },
  components: {
    confirm_delete_title: 'Confirmation requise',
    confirm_delete_message: 'Voulez-vous vraiment supprimer cette entrée?',
    confirm_yes: 'Oui',
    confirm_no: 'Non',
    table: {
      no_data: 'Rien à afficher',
      no_results: 'Rien trouvé',
      records: 'Aucun article | 1 article | {total} 10 articles',
      query: 'Chercher...',
      columns: {
        id: 'Id',
        created_at: 'Créé à',
        updated_at: 'Mis à jour à',
        actions: 'Actions',
        image: 'Image',
      },
    },
    datePicker: {
      placeholder_date: 'Choisissez une date',
      placeholder_range: 'Choisissez une période',
      months: [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Août',
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre',
      ],
      monthsShort: ['Jan', 'Fév', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'],
      weekdays: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
      weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
      weekdaysMin: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
    },
  },
  errors: {
    error: 'Erreur',
    access_denied: 'Accès refusé',
    http401: 'Erreur 401: Autorisation requise',
    http403: 'Erreur 403: Accès refusé',
    http404: 'Error 404: Not Found',
    http500: 'Erreur 500 : Erreur de serveur',
    http0: 'Erreur inconnue',
  },
}

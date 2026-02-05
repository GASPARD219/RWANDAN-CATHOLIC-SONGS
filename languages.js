// ===== LANGUAGE MANAGEMENT =====
const translations = {
    'rw': {
        // Auth Translations
        'signup': 'Iyandikishe',
        'login': 'Injira',
        'continue_without_login': 'Komeza utarinjiye',
        'continue_with_google': 'Komeza ukoresheje Google',
        'email': 'Email',
        'password': 'Ijambobanga',
        'confirm_password': 'Emeza ijambobanga',
        'signup_success': '✅ Wiyandikishije neza!',
        'login_success': '✅ Winjiye neza!',
        'redirecting': 'Ugiye kuri welcome page...',
        
        // Welcome Page
        'welcome_title': 'Murakaza neza!',
        'welcome_subtitle': 'Muri App y\'Indirimbo za Gatolika',
        'downloads': 'Downloads',
        'views': 'Views',
        'songs': 'Indirimbo',
        'last_login': 'Winjiye:',
        'app_features': 'Ibikorwa by\'App',
        'feature_songs': 'Indirimbo nyinshi',
        'feature_songs_desc': 'Shakira indirimbo za Gatolika zose',
        'feature_search': 'Shakira vuba',
        'feature_search_desc': 'Shakira ukurikije izina cyangwa igice',
        'feature_offline': 'Koresha offline',
        'feature_offline_desc': 'Koresha app nta internet',
        'feature_notifications': 'Amatangazo',
        'feature_notifications_desc': 'Menya iyo hari indirimbo nshya',
        'continue_to_app': 'Komeza kuri App',
        'continue_info': 'Kanda buto iyo kugirango ugere kuri page nyamukuru y\'indirimbo.',
        'admin_note': 'Niba uri admin, kanda "Admin Login" muri page nyamukuru.',
        'welcome_footer': 'App y\'Indirimbo za Gatolika • Version 1.0 • © 2024',
        'enjoy_app': 'Urakiriye gukoresha app!',
        'loading': 'Iri gukora',
        'guest_user': 'Guest',
        'registered_user': 'User',
        
        // Index Page (User)
        'app_name_user': 'INDIRIMBO ZA GATOLIKA',
        'welcome_subtitle': 'SHAKA INDIRIMBO UKURIKIJE IZINA CYANGWA IGICE CYA MISSA',
        'install_app': 'Kwinjiza App',
        'search_songs_placeholder': 'Shaka indirimbo...',
        'filter_section_placeholder': '-- Shaka ukurikije igice --',
        'filter_by_section': '-- Shaka ukurikije igice --',
        'clear_user': 'Subira',
        'admin_login_user': 'Admin Login',
        'contact_us_user': 'Twandikire',
        'your_email': 'Email Yawe:',
        'email_placeholder': 'shyiramo email yawe...',
        'your_message': 'Ubutumwa:',
        'message_placeholder': 'Andika ubutumwa wawe... (min: 10 imibare)',
        'message_sent': '✅ Ubutumwa bwawe bwoherejwe!',
        'we_will_reply': 'Ntugire ikibazo, turabasubiza vuba.',
        'note': '🔔 Icyitonderwa:',
        'email_usage': 'Email yawe izakoreshwa gusa kugirango dukubwire.',
        'reply_time': 'Turabasubiza mu gihe gito.',
        'message_types': 'Ubutumwa buri rusange: amakuru, ibibazo, amanota, etc.',
        'send_message': 'Ohereza Ubutumwa',
        'cancel': 'Hagarika',
        'ok': 'OK',
        
        // Sections
        'all_sections': 'Zose',
        'intro': 'Intangiriro',
        'forgiveness': 'Kubabarira',
        'glory_to_god': 'Ishimwe kuri Imana',
        'psalms': 'Zaburi',
        'alleluia': 'Aleluya',
        'creed': 'Kwizera',
        'prayers': 'Amasengesho',
        'offertory': 'Kwiyambutsa',
        'holy': 'Mutagatifu',
        'lamb_of_god': 'Akanyamasa k\'Imana',
        'communion': 'Kumvikana',
        'thanksgiving': 'Ishimwe',
        'conclusion': 'Iherezo',
        'mary': 'Mariya',
        'saints': 'Abatagatifu',
        'wedding': 'Ubusizwe',
        'funeral': 'Ibyabaye mu gupfa',
        'advent': 'Adventi',
        'christmas': 'Noheli',
        'lent': 'Igihe cyo kwiyegereza',
        'easter': 'Pasika',
        'ascension': 'Kuzamurwa',
        'pentecost': 'Pentekote',
        'other_songs': 'Izindi ndirimbo',
        
        // Song Actions
        'download_user': 'Kuramo',
        'preview_user': 'Reba',
        'no_songs': 'Nta ndirimbo zihari.',
        'search': 'Shakira',
        
        // Admin Page
        'admin_login': 'Injira nk\'Admin',
        'username_placeholder': 'Username',
        'password_placeholder': 'Password',
        'back_to_home': 'Subira kuri page nyamukuru',
        'warning': '⚠️ Icyitonderwa:',
        'offline_warning': 'Ubu uri offline. Admin dashboard ishobora kutikora neza nta internet.',
        'login_error': 'Username cyangwa password ntabwo ari yo!',
        'offline_confirm': '⚠️ Ubu uri offline! Dashboard ishobora kutikora neza. Urashaka gukomeza?',
        
        // Admin Dashboard
        'admin_dashboard': 'Admin Dashboard',
        'refresh': 'Ongera urebe',
        'view_user': 'Reba User View',
        'logout': 'Sohoka',
        'upload_songs': 'Shyiraho',
        'manage_songs': 'Menya',
        'status': 'Status',
        'notifications': 'Amatangazo',
        'upload_instructions': 'Shyiraho Indirimbo',
        'instructions': 'Amabwiriza:',
        'upload_guide': 'Hitamo uburyo bwo gushyiramo, fayilo na igice.',
        'upload_capabilities': 'Ushobora: Shyiramo indirimbo imwe, nyinshi icyarimwe, cyangwa fayilo nini (kugeza 10MB).',
        'formats': 'Formats: MP3, PDF, JPG, PNG, GIF',
        'single_song': 'Indirimbo Imwe',
        'single_song_desc': 'Shyiramo indirimbo imwe',
        'multiple_songs': 'Indirimbo Nyinshi',
        'multiple_songs_desc': 'Shyiramo indirimbo nyinshi icyarimwe',
        'large_file': 'Fayilo Nini',
        'large_file_desc': 'Shyiramo fayilo nini (MP3 nini)',
        'select_section_label': 'Hitamo Igice:',
        'select_section_placeholder': '-- Hitamo igice --',
        'select_mass_section': '-- Hitamo igice cya missa --',
        'select_file': 'Hitamo Fayilo:',
        'upload_song': 'Shyiraho Indirimbo',
        'reset': 'Subira utangire',
        'stop': 'Hagarika',
        'uploading': 'Iri kushyirwa:',
        'wait': 'Tegereza...',
        'batch_upload': '📦 Gushyiraho Indirimbo Nyinshi',
        'total': 'Zose',
        'completed': 'Byakozwe',
        'progress': 'Imikoro',
        'failed': 'Byanze',
        'upload_success': 'Indirimbo yashyizweho neza!',
        'view_all_songs': 'Reba indirimbo zose',
        'upload_another': 'Shyiraho indi',
        'batch_upload_success': 'Indirimbo nyinshi zashyizweho neza!',
        'upload_more': 'Shyiraho izindi',
        'search_songs_placeholder_admin': 'Shaka indirimbo...',
        'filter_section_placeholder_admin': '-- Hitamo igice --',
        'clear': 'Subira',
        'total_uploads': 'Indirimbo zishyizweho:',
        'your_uploads': 'Zishyizwe nawe:',
        'sections': 'Ibigice:',
        'refresh_view': 'Ongera urebe',
        'my_upload': 'Yanje',
        'preview': 'Reba',
        'delete': 'Siba',
        'system_info': '📊 Ibyerekeye Sisitemu',
        'total_songs': 'Indirimbo zishyizweho:',
        'total_downloads': 'Downloads zose:',
        'sections_count': 'Ibigice:',
        'your_activity': '👤 Ibikorwa byawe',
        'your_uploads_count': 'Washyizemo:',
        'current_admin': 'Uyobowe:',
        'last_login': 'Winjiye:',
        'connection_info': '🔗 Ubumenyi',
        'user_url': 'User URL:',
        'system_status': 'Sisitemu:',
        'working': 'Ikora',
        'test_user_view': 'Gerageza User View',
        'upload_logs': '🔔 Amakuru ya Upload',
        'no_logs': 'Nta makuru',
        'email_notifications': 'Guhana Notifications kuri Email',
        'save_email': 'Kubika Email',
        'test_email': 'Gerageza Email',
        'notification_stats': 'Amatangazo y\'ibikorwa',
        'total_downloads_stat': 'Downloads Zose',
        'last_24h': 'Mu ma 24 ashize',
        'last_email': 'Email ishize yoherejwe',
        'emails_sent': 'Email zoherejwe',
        'notification_settings': 'Igenamiterere ry\'Amatangazo',
        'enable_email_notifications': 'Emeza amatangazo kuri email',
        'notify_all_downloads': 'Tangaza buri download',
        'notify_popular_songs': 'Tangaza indirimbo zirikunda cyane',
        'notification_frequency': 'Uko byinshi ukwirakwiza:',
        'immediate': 'Buri download',
        'hourly': 'Buri isaha',
        'daily': 'Buri munsi',
        'save_settings': 'Kubika Igenamiterere',
        
        // Common
        'email_required': 'Shyiramo email nterinze!',
        'message_required': 'Ubutumwa bukenewe (min: 10 imibare)!'
    },
    
    'en': {
        // Auth Translations
        'signup': 'Sign Up',
        'login': 'Login',
        'continue_without_login': 'Continue without login',
        'continue_with_google': 'Continue with Google',
        'email': 'Email',
        'password': 'Password',
        'confirm_password': 'Confirm Password',
        'signup_success': '✅ Signup successful!',
        'login_success': '✅ Login successful!',
        'redirecting': 'Redirecting to welcome page...',
        
        // Welcome Page
        'welcome_title': 'Welcome!',
        'welcome_subtitle': 'To Catholic Songs App',
        'downloads': 'Downloads',
        'views': 'Views',
        'songs': 'Songs',
        'last_login': 'Last login:',
        'app_features': 'App Features',
        'feature_songs': 'Many Songs',
        'feature_songs_desc': 'Find all Catholic songs',
        'feature_search': 'Fast Search',
        'feature_search_desc': 'Search by name or section',
        'feature_offline': 'Use Offline',
        'feature_offline_desc': 'Use app without internet',
        'feature_notifications': 'Notifications',
        'feature_notifications_desc': 'Know when new songs are added',
        'continue_to_app': 'Continue to App',
        'continue_info': 'Click this button to go to the main songs page.',
        'admin_note': 'If you are admin, click "Admin Login" on main page.',
        'welcome_footer': 'Catholic Songs App • Version 1.0 • © 2024',
        'enjoy_app': 'Enjoy using the app!',
        'loading': 'Loading',
        'guest_user': 'Guest',
        'registered_user': 'Registered User',
        
        // Index Page (User)
        'app_name_user': 'CATHOLIC SONGS',
        'welcome_subtitle': 'FIND SONGS BY NAME OR MASS SECTION',
        'install_app': 'Install App',
        'search_songs_placeholder': 'Search songs...',
        'filter_section_placeholder': '-- Search by section --',
        'filter_by_section': '-- Search by section --',
        'clear_user': 'Clear',
        'admin_login_user': 'Admin Login',
        'contact_us_user': 'Contact Us',
        'your_email': 'Your Email:',
        'email_placeholder': 'enter your email...',
        'your_message': 'Your Message:',
        'message_placeholder': 'Write your message... (min: 10 characters)',
        'message_sent': '✅ Your message has been sent!',
        'we_will_reply': 'Don\'t worry, we will reply soon.',
        'note': '🔔 Note:',
        'email_usage': 'Your email will only be used to contact you.',
        'reply_time': 'We will reply in short time.',
        'message_types': 'General messages: information, questions, notes, etc.',
        'send_message': 'Send Message',
        'cancel': 'Cancel',
        'ok': 'OK',
        
        // Sections
        'all_sections': 'All',
        'intro': 'Introduction',
        'forgiveness': 'Forgiveness',
        'glory_to_god': 'Glory to God',
        'psalms': 'Psalms',
        'alleluia': 'Alleluia',
        'creed': 'Creed',
        'prayers': 'Prayers',
        'offertory': 'Offertory',
        'holy': 'Holy',
        'lamb_of_god': 'Lamb of God',
        'communion': 'Communion',
        'thanksgiving': 'Thanksgiving',
        'conclusion': 'Conclusion',
        'mary': 'Mary',
        'saints': 'Saints',
        'wedding': 'Wedding',
        'funeral': 'Funeral',
        'advent': 'Advent',
        'christmas': 'Christmas',
        'lent': 'Lent',
        'easter': 'Easter',
        'ascension': 'Ascension',
        'pentecost': 'Pentecost',
        'other_songs': 'Other Songs',
        
        // Song Actions
        'download_user': 'Download',
        'preview_user': 'Preview',
        'no_songs': 'No songs available.',
        'search': 'Search',
        
        // Admin Page
        'admin_login': 'Admin Login',
        'username_placeholder': 'Username',
        'password_placeholder': 'Password',
        'back_to_home': 'Back to Home Page',
        'warning': '⚠️ Warning:',
        'offline_warning': 'You are offline. Admin dashboard may not work properly without internet.',
        'login_error': 'Username or password is incorrect!',
        'offline_confirm': '⚠️ You are offline! Dashboard may not work properly. Do you want to continue?',
        
        // Admin Dashboard
        'admin_dashboard': 'Admin Dashboard',
        'refresh': 'Refresh',
        'view_user': 'View User View',
        'logout': 'Logout',
        'upload_songs': 'Upload',
        'manage_songs': 'Manage',
        'status': 'Status',
        'notifications': 'Notifications',
        'upload_instructions': 'Upload Songs',
        'instructions': 'Instructions:',
        'upload_guide': 'Choose upload mode, file and section.',
        'upload_capabilities': 'You can: Upload single song, multiple at once, or large file (up to 10MB).',
        'formats': 'Formats: MP3, PDF, JPG, PNG, GIF',
        'single_song': 'Single Song',
        'single_song_desc': 'Upload one song',
        'multiple_songs': 'Multiple Songs',
        'multiple_songs_desc': 'Upload multiple songs at once',
        'large_file': 'Large File',
        'large_file_desc': 'Upload large file (big MP3)',
        'select_section_label': 'Select Section:',
        'select_section_placeholder': '-- Select section --',
        'select_mass_section': '-- Select mass section --',
        'select_file': 'Select File:',
        'upload_song': 'Upload Song',
        'reset': 'Reset',
        'stop': 'Stop',
        'uploading': 'Uploading:',
        'wait': 'Please wait...',
        'batch_upload': '📦 Batch Upload',
        'total': 'Total',
        'completed': 'Completed',
        'progress': 'Progress',
        'failed': 'Failed',
        'upload_success': 'Song uploaded successfully!',
        'view_all_songs': 'View all songs',
        'upload_another': 'Upload another',
        'batch_upload_success': 'Multiple songs uploaded successfully!',
        'upload_more': 'Upload more',
        'search_songs_placeholder_admin': 'Search songs...',
        'filter_section_placeholder_admin': '-- Select section --',
        'clear': 'Clear',
        'total_uploads': 'Total uploads:',
        'your_uploads': 'Your uploads:',
        'sections': 'Sections:',
        'refresh_view': 'Refresh View',
        'my_upload': 'Mine',
        'preview': 'Preview',
        'delete': 'Delete',
        'system_info': '📊 System Info',
        'total_songs': 'Total songs:',
        'total_downloads': 'Total downloads:',
        'sections_count': 'Sections:',
        'your_activity': '👤 Your Activity',
        'your_uploads_count': 'Your uploads:',
        'current_admin': 'Current admin:',
        'last_login': 'Last login:',
        'connection_info': '🔗 Connection',
        'user_url': 'User URL:',
        'system_status': 'System:',
        'working': 'Working',
        'test_user_view': 'Test User View',
        'upload_logs': '🔔 Upload Logs',
        'no_logs': 'No logs',
        'email_notifications': 'Email Notifications',
        'save_email': 'Save Email',
        'test_email': 'Test Email',
        'notification_stats': 'Notification Stats',
        'total_downloads_stat': 'Total Downloads',
        'last_24h': 'Last 24h',
        'last_email': 'Last email sent',
        'emails_sent': 'Emails sent',
        'notification_settings': 'Notification Settings',
        'enable_email_notifications': 'Enable email notifications',
        'notify_all_downloads': 'Notify all downloads',
        'notify_popular_songs': 'Notify popular songs',
        'notification_frequency': 'Notification frequency:',
        'immediate': 'Every download',
        'hourly': 'Hourly',
        'daily': 'Daily',
        'save_settings': 'Save Settings',
        
        // Common
        'email_required': 'Please enter a valid email!',
        'message_required': 'Message required (min: 10 characters)!'
    },
    
    'fr': {
        // Auth Translations
        'signup': 'S\'inscrire',
        'login': 'Connexion',
        'continue_without_login': 'Continuer sans connexion',
        'continue_with_google': 'Continuer avec Google',
        'email': 'Email',
        'password': 'Mot de passe',
        'confirm_password': 'Confirmer le mot de passe',
        'signup_success': '✅ Inscription réussie!',
        'login_success': '✅ Connexion réussie!',
        'redirecting': 'Redirection vers la page de bienvenue...',
        
        // Welcome Page
        'welcome_title': 'Bienvenue!',
        'welcome_subtitle': 'À l\'application Chants Catholiques',
        'downloads': 'Téléchargements',
        'views': 'Vues',
        'songs': 'Chants',
        'last_login': 'Dernière connexion:',
        'app_features': 'Fonctionnalités de l\'App',
        'feature_songs': 'Beaucoup de chants',
        'feature_songs_desc': 'Trouvez tous les chants catholiques',
        'feature_search': 'Recherche rapide',
        'feature_search_desc': 'Rechercher par nom ou section',
        'feature_offline': 'Utiliser hors ligne',
        'feature_offline_desc': 'Utiliser l\'app sans internet',
        'feature_notifications': 'Notifications',
        'feature_notifications_desc': 'Sachez quand de nouveaux chants sont ajoutés',
        'continue_to_app': 'Continuer vers l\'App',
        'continue_info': 'Cliquez sur ce bouton pour aller à la page principale des chants.',
        'admin_note': 'Si vous êtes admin, cliquez sur "Admin Login" sur la page principale.',
        'welcome_footer': 'App Chants Catholiques • Version 1.0 • © 2024',
        'enjoy_app': 'Profitez de l\'utilisation de l\'app!',
        'loading': 'Chargement',
        'guest_user': 'Invité',
        'registered_user': 'Utilisateur enregistré',
        
        // Index Page (User)
        'app_name_user': 'CHANTS CATHOLIQUES',
        'welcome_subtitle': 'TROUVEZ DES CHANTS PAR NOM OU SECTION DE MESSE',
        'install_app': 'Installer l\'App',
        'search_songs_placeholder': 'Rechercher des chants...',
        'filter_section_placeholder': '-- Rechercher par section --',
        'filter_by_section': '-- Rechercher par section --',
        'clear_user': 'Effacer',
        'admin_login_user': 'Connexion Admin',
        'contact_us_user': 'Contactez-nous',
        'your_email': 'Votre Email:',
        'email_placeholder': 'entrez votre email...',
        'your_message': 'Votre Message:',
        'message_placeholder': 'Écrivez votre message... (min: 10 caractères)',
        'message_sent': '✅ Votre message a été envoyé!',
        'we_will_reply': 'Ne vous inquiétez pas, nous répondrons bientôt.',
        'note': '🔔 Note:',
        'email_usage': 'Votre email sera utilisé uniquement pour vous contacter.',
        'reply_time': 'Nous répondrons sous peu.',
        'message_types': 'Messages généraux: informations, questions, notes, etc.',
        'send_message': 'Envoyer le Message',
        'cancel': 'Annuler',
        'ok': 'OK',
        
        // Sections
        'all_sections': 'Tout',
        'intro': 'Introduction',
        'forgiveness': 'Pardon',
        'glory_to_god': 'Gloire à Dieu',
        'psalms': 'Psaumes',
        'alleluia': 'Alléluia',
        'creed': 'Credo',
        'prayers': 'Prière',
        'offertory': 'Offertoire',
        'holy': 'Saint',
        'lamb_of_god': 'Agneau de Dieu',
        'communion': 'Communion',
        'thanksgiving': 'Action de grâce',
        'conclusion': 'Conclusion',
        'mary': 'Marie',
        'saints': 'Saints',
        'wedding': 'Mariage',
        'funeral': 'Funérailles',
        'advent': 'Avent',
        'christmas': 'Noël',
        'lent': 'Carême',
        'easter': 'Pâques',
        'ascension': 'Ascension',
        'pentecost': 'Pentecôte',
        'other_songs': 'Autres chants',
        
        // Song Actions
        'download_user': 'Télécharger',
        'preview_user': 'Aperçu',
        'no_songs': 'Aucun chant disponible.',
        'search': 'Rechercher',
        
        // Admin Page
        'admin_login': 'Connexion Admin',
        'username_placeholder': 'Nom d\'utilisateur',
        'password_placeholder': 'Mot de passe',
        'back_to_home': 'Retour à la page d\'accueil',
        'warning': '⚠️ Attention:',
        'offline_warning': 'Vous êtes hors ligne. Le tableau de bord admin peut ne pas fonctionner correctement sans internet.',
        'login_error': 'Nom d\'utilisateur ou mot de passe incorrect!',
        'offline_confirm': '⚠️ Vous êtes hors ligne! Le tableau de bord peut ne pas fonctionner correctement. Voulez-vous continuer?',
        
        // Admin Dashboard
        'admin_dashboard': 'Tableau de Bord Admin',
        'refresh': 'Rafraîchir',
        'view_user': 'Voir Vue Utilisateur',
        'logout': 'Déconnexion',
        'upload_songs': 'Téléverser',
        'manage_songs': 'Gérer',
        'status': 'Statut',
        'notifications': 'Notifications',
        'upload_instructions': 'Téléverser des Chants',
        'instructions': 'Instructions:',
        'upload_guide': 'Choisissez le mode de téléversement, fichier et section.',
        'upload_capabilities': 'Vous pouvez: Téléverser un seul chant, plusieurs à la fois, ou un gros fichier (jusqu\'à 10MB).',
        'formats': 'Formats: MP3, PDF, JPG, PNG, GIF',
        'single_song': 'Chant Unique',
        'single_song_desc': 'Téléverser un chant',
        'multiple_songs': 'Plusieurs Chants',
        'multiple_songs_desc': 'Téléverser plusieurs chants à la fois',
        'large_file': 'Gros Fichier',
        'large_file_desc': 'Téléverser un gros fichier (grand MP3)',
        'select_section_label': 'Sélectionner la Section:',
        'select_section_placeholder': '-- Sélectionner la section --',
        'select_mass_section': '-- Sélectionner la section de messe --',
        'select_file': 'Sélectionner le Fichier:',
        'upload_song': 'Téléverser le Chant',
        'reset': 'Réinitialiser',
        'stop': 'Arrêter',
        'uploading': 'Téléversement:',
        'wait': 'Veuillez patienter...',
        'batch_upload': '📦 Téléversement par Lots',
        'total': 'Total',
        'completed': 'Terminé',
        'progress': 'Progression',
        'failed': 'Échoué',
        'upload_success': 'Chant téléversé avec succès!',
        'view_all_songs': 'Voir tous les chants',
        'upload_another': 'Téléverser un autre',
        'batch_upload_success': 'Plusieurs chants téléversés avec succès!',
        'upload_more': 'Téléverser plus',
        'search_songs_placeholder_admin': 'Rechercher des chants...',
        'filter_section_placeholder_admin': '-- Sélectionner la section --',
        'clear': 'Effacer',
        'total_uploads': 'Total téléversé:',
        'your_uploads': 'Vos téléversements:',
        'sections': 'Sections:',
        'refresh_view': 'Rafraîchir la Vue',
        'my_upload': 'Mien',
        'preview': 'Aperçu',
        'delete': 'Supprimer',
        'system_info': '📊 Info Système',
        'total_songs': 'Total chants:',
        'total_downloads': 'Total téléchargements:',
        'sections_count': 'Sections:',
        'your_activity': '👤 Votre Activité',
        'your_uploads_count': 'Vos téléversements:',
        'current_admin': 'Admin actuel:',
        'last_login': 'Dernière connexion:',
        'connection_info': '🔗 Connexion',
        'user_url': 'URL Utilisateur:',
        'system_status': 'Système:',
        'working': 'Fonctionne',
        'test_user_view': 'Tester Vue Utilisateur',
        'upload_logs': '🔔 Journaux de Téléversement',
        'no_logs': 'Aucun journal',
        'email_notifications': 'Notifications par Email',
        'save_email': 'Sauvegarder Email',
        'test_email': 'Tester Email',
        'notification_stats': 'Statistiques de Notifications',
        'total_downloads_stat': 'Total Téléchargements',
        'last_24h': 'Dernières 24h',
        'last_email': 'Dernier email envoyé',
        'emails_sent': 'Emails envoyés',
        'notification_settings': 'Paramètres de Notifications',
        'enable_email_notifications': 'Activer notifications par email',
        'notify_all_downloads': 'Notifier tous les téléchargements',
        'notify_popular_songs': 'Notifier chants populaires',
        'notification_frequency': 'Fréquence de notification:',
        'immediate': 'Chaque téléchargement',
        'hourly': 'Toutes les heures',
        'daily': 'Quotidien',
        'save_settings': 'Sauvegarder Paramètres',
        
        // Common
        'email_required': 'Veuillez entrer un email valide!',
        'message_required': 'Message requis (min: 10 caractères)!'
    }
};

const LanguageManager = {
    currentLang: 'rw',
    
    init() {
        this.currentLang = localStorage.getItem('app_language') || 'rw';
        this.applyLanguage();
        this.setupLanguageSwitcher();
    },
    
    setLanguage(lang) {
        if (translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('app_language', lang);
            this.applyLanguage();
            this.showLanguageChangeNotification(lang);
        }
    },
    
    applyLanguage() {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.getTranslation(key);
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else if (element.tagName === 'OPTION') {
                    element.textContent = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
        
        this.updateLanguageSwitcherUI();
    },
    
    getTranslation(key) {
        return translations[this.currentLang]?.[key] || translations['rw'][key] || key;
    },
    
    setupLanguageSwitcher() {
        const switcher = document.getElementById('languageSwitcher');
        if (switcher) {
            switcher.innerHTML = `
                <div class="language-dropdown">
                    <button class="language-current">
                        <span class="language-flag">${this.getFlag(this.currentLang)}</span>
                        <span class="language-name">${this.getLanguageName(this.currentLang)}</span>
                        <span class="language-arrow">▼</span>
                    </button>
                    <div class="language-options">
                        <button onclick="LanguageManager.setLanguage('rw')" class="${this.currentLang === 'rw' ? 'active' : ''}">
                            <span class="language-flag">🇷🇼</span> Kinyarwanda
                        </button>
                        <button onclick="LanguageManager.setLanguage('en')" class="${this.currentLang === 'en' ? 'active' : ''}">
                            <span class="language-flag">🇬🇧</span> English
                        </button>
                        <button onclick="LanguageManager.setLanguage('fr')" class="${this.currentLang === 'fr' ? 'active' : ''}">
                            <span class="language-flag">🇫🇷</span> Français
                        </button>
                    </div>
                </div>
            `;
            
            switcher.querySelector('.language-current').addEventListener('click', function(e) {
                e.stopPropagation();
                const options = this.parentElement.querySelector('.language-options');
                options.style.display = options.style.display === 'block' ? 'none' : 'block';
            });
            
            document.addEventListener('click', function() {
                const options = document.querySelector('.language-options');
                if (options) options.style.display = 'none';
            });
        }
    },
    
    updateLanguageSwitcherUI() {
        const currentBtn = document.querySelector('.language-current');
        const options = document.querySelectorAll('.language-options button');
        
        if (currentBtn) {
            currentBtn.querySelector('.language-flag').textContent = this.getFlag(this.currentLang);
            currentBtn.querySelector('.language-name').textContent = this.getLanguageName(this.currentLang);
        }
        
        options.forEach(btn => {
            const lang = btn.getAttribute('onclick').match(/'(\w+)'/)?.[1];
            btn.classList.toggle('active', lang === this.currentLang);
        });
    },
    
    getFlag(lang) {
        const flags = { 'rw': '🇷🇼', 'en': '🇬🇧', 'fr': '🇫🇷' };
        return flags[lang] || '🌐';
    },
    
    getLanguageName(lang) {
        const names = { 'rw': 'Kinyarwanda', 'en': 'English', 'fr': 'Français' };
        return names[lang] || lang;
    },
    
    showLanguageChangeNotification(lang) {
        const messages = {
            'rw': 'Ururimi rwahinduwe!',
            'en': 'Language changed!',
            'fr': 'Langue changée!'
        };
        
        const notification = document.createElement('div');
        notification.className = 'language-notification';
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 20px;">${this.getFlag(lang)}</span>
                <span>${messages[lang]}</span>
            </div>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4b0082;
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            z-index: 10000;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
};

// Make LanguageManager globally accessible
window.LanguageManager = LanguageManager;
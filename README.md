# Parcours Hommes - page d'atterrissage

Page de vente du Parcours Hommes d'Émilie Naturelle, servie par un Worker Cloudflare (ressources statiques). Chaque modification poussée sur la branche de production de ce dépôt est déployée automatiquement par Cloudflare.

## Structure

| Dossier ou fichier | Rôle |
|---|---|
| `public/` | **Tout ce qui est en ligne.** C'est le seul dossier publié. |
| `public/index.html` | La page (version 5). Le texte, les prix, le lien Stripe et la FAQ sont ici. |
| `public/ds/` | Le système de design : couleurs, typographie, espacements, composants (bouton, etc.). |
| `public/images/` | Photo d'Émilie et favicon. |
| `public/vendor/` | React 18.3.1, servi depuis le site (plus de dépendance à unpkg.com). |
| `public/support.js` | Moteur d'affichage généré par Claude Design. Ne pas modifier à la main. |
| `public/404.html` | Page affichée pour une adresse inexistante. |
| `archives/` | Versions précédentes (v4, versions autonomes, texte v3, images de travail). Rien ici n'est publié. |
| `wrangler.jsonc` | Configuration du Worker Cloudflare. |

## Modifier le site

Le plus simple : demander la modification à Claude dans une session connectée à ce dépôt (« change le prix pour 649 $ », « ajoute une question à la FAQ »). Claude modifie `public/index.html`, pousse, et Cloudflare redéploie en une minute environ.

Repères dans `public/index.html` :

- Prix : chercher `599` et `777`.
- Lien de paiement Stripe : chercher `buy.stripe.com`.
- Sections : chaque section commence par un commentaire `<!-- ============ ... ============ -->`.

## Tester localement (facultatif)

```bash
npx wrangler dev
```

Puis ouvrir http://localhost:8787.

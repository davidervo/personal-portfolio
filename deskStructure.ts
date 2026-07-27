import type { StructureBuilder } from 'sanity/structure'

// Pins `about` as a singleton — always the same document ID, no "Create"
// button, and hidden from the generic document-type list below it.
export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('About page')
        .id('about')
        .child(S.document().schemaType('about').documentId('about')),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => item.getId() !== 'about'),
    ])

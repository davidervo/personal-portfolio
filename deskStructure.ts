import type { StructureBuilder } from 'sanity/structure'

// Pins `about`, `home`, and `services` as singletons — always the same
// document ID, no "Create" button, and hidden from the generic
// document-type list below them.
const SINGLETONS: Array<{ id: string; title: string }> = [
  { id: 'home', title: 'Home page' },
  { id: 'about', title: 'About page' },
  { id: 'services', title: 'Services page' },
]

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      ...SINGLETONS.map(({ id, title }) =>
        S.listItem()
          .title(title)
          .id(id)
          .child(S.document().schemaType(id).documentId(id)),
      ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !SINGLETONS.some((s) => s.id === item.getId()),
      ),
    ])

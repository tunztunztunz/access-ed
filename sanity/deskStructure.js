import S, { listItem } from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content')
    .items([
      // Make a new list item
      S.listItem()
        // Give it a title
        .title('Pages')
        .child(
          // Make a list in the second pane called Portfolio
          S.list()
            .title('Pages')
            .items([
              // Add the first list item
              S.listItem()
                .title('Landing Page')
                // This automatically gives it properties from the project type
                .schemaType('landingPage')
                // When you open this list item, list out the documents
                // of the type “project"
                .child(
                  S.document()
                    .schemaType('landingPage')
                    .documentId('landingPage')
                ),
              S.listItem()
                .title('About Page')
                // This automatically gives it properties from the project type
                .schemaType('aboutPage')
                // When you open this list item, list out the documents
                // of the type “project"
                .child(
                  S.document()
                    .schemaType('aboutPage')
                    .documentId('aboutPage')
                ),
              // Add a second list item
              S.listItem()
                .title('Service Pages')
                .schemaType('servicePage')
                .child(S.documentTypeList('servicePage').title('Service Pages')),
            ])
        ),
      ...S.documentTypeListItems().filter(
        listItem => !['landingPage', 'aboutPage', 'servicePage'].includes(listItem.getId())
      ),
    ]);
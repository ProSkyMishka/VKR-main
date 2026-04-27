import SwiftUI

struct ContentView: View {
    let items = ["nlm005-one", "nlm005-two", "nlm005-three", "nlm005-four"]
    var body: some View {
        NavigationView {
            List(items, id: \.self) { it in
                NavigationLink(it) { Text("nlm005-selected: " + it) }
            }
            .navigationTitle("nlm005-list")
        }
    }
}

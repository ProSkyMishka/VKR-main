import SwiftUI

struct ContentView: View {
    let items = ["nlm001-one", "nlm001-two", "nlm001-three", "nlm001-four"]
    var body: some View {
        NavigationView {
            List(items, id: \.self) { it in
                NavigationLink(it) { Text("nlm001-selected: " + it) }
            }
            .navigationTitle("nlm001-list")
        }
    }
}

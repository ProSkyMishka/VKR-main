import SwiftUI

struct ContentView: View {
    let items = ["nlm002-one", "nlm002-two", "nlm002-three", "nlm002-four"]
    var body: some View {
        NavigationView {
            List(items, id: \.self) { it in
                NavigationLink(it) { Text("nlm002-selected: " + it) }
            }
            .navigationTitle("nlm002-list")
        }
    }
}

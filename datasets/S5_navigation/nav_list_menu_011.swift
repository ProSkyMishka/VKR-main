import SwiftUI

struct ContentView: View {
    let items = ["nlm011-one", "nlm011-two", "nlm011-three", "nlm011-four"]
    var body: some View {
        NavigationView {
            List(items, id: \.self) { it in
                NavigationLink(it) { Text("nlm011-selected: " + it) }
            }
            .navigationTitle("nlm011-list")
        }
    }
}

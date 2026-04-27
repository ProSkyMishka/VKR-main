import SwiftUI

struct ContentView: View {
    let items = ["nlm012-one", "nlm012-two", "nlm012-three", "nlm012-four"]
    var body: some View {
        NavigationView {
            List(items, id: \.self) { it in
                NavigationLink(it) { Text("nlm012-selected: " + it) }
            }
            .navigationTitle("nlm012-list")
        }
    }
}

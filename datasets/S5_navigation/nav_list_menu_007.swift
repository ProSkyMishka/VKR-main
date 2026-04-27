import SwiftUI

struct ContentView: View {
    let items = ["nlm007-one", "nlm007-two", "nlm007-three", "nlm007-four"]
    var body: some View {
        NavigationView {
            List(items, id: \.self) { it in
                NavigationLink(it) { Text("nlm007-selected: " + it) }
            }
            .navigationTitle("nlm007-list")
        }
    }
}

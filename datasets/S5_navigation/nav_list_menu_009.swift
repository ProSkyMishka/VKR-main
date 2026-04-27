import SwiftUI

struct ContentView: View {
    let items = ["nlm009-one", "nlm009-two", "nlm009-three", "nlm009-four"]
    var body: some View {
        NavigationView {
            List(items, id: \.self) { it in
                NavigationLink(it) { Text("nlm009-selected: " + it) }
            }
            .navigationTitle("nlm009-list")
        }
    }
}

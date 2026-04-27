import SwiftUI

struct ContentView: View {
    let items = ["nlm010-one", "nlm010-two", "nlm010-three", "nlm010-four"]
    var body: some View {
        NavigationView {
            List(items, id: \.self) { it in
                NavigationLink(it) { Text("nlm010-selected: " + it) }
            }
            .navigationTitle("nlm010-list")
        }
    }
}

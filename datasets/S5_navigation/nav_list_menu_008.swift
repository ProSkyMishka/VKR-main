import SwiftUI

struct ContentView: View {
    let items = ["nlm008-one", "nlm008-two", "nlm008-three", "nlm008-four"]
    var body: some View {
        NavigationView {
            List(items, id: \.self) { it in
                NavigationLink(it) { Text("nlm008-selected: " + it) }
            }
            .navigationTitle("nlm008-list")
        }
    }
}

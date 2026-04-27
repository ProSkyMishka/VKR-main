import SwiftUI

struct ContentView: View {
    let items = ["ncp009-i1", "ncp009-i2"]
    var body: some View {
        NavigationView {
            VStack(alignment: .leading, spacing: 10) {
                Text("ncp009-pinned").font(.headline)
                NavigationLink("ncp009-quick") { Text("ncp009-quickBody") }
                Divider()
                Text("ncp009-list").font(.headline)
                List(items, id: \.self) { it in
                    NavigationLink(it) { Text("ncp009-page: " + it) }
                }
            }
            .padding(.horizontal)
            .navigationTitle("ncp009-compose")
        }
    }
}

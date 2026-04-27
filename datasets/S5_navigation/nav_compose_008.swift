import SwiftUI

struct ContentView: View {
    let items = ["ncp008-i1", "ncp008-i2"]
    var body: some View {
        NavigationView {
            VStack(alignment: .leading, spacing: 10) {
                Text("ncp008-pinned").font(.headline)
                NavigationLink("ncp008-quick") { Text("ncp008-quickBody") }
                Divider()
                Text("ncp008-list").font(.headline)
                List(items, id: \.self) { it in
                    NavigationLink(it) { Text("ncp008-page: " + it) }
                }
            }
            .padding(.horizontal)
            .navigationTitle("ncp008-compose")
        }
    }
}

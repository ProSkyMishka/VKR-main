import SwiftUI

struct ContentView: View {
    let items = ["ncp001-i1", "ncp001-i2"]
    var body: some View {
        NavigationView {
            VStack(alignment: .leading, spacing: 10) {
                Text("ncp001-pinned").font(.headline)
                NavigationLink("ncp001-quick") { Text("ncp001-quickBody") }
                Divider()
                Text("ncp001-list").font(.headline)
                List(items, id: \.self) { it in
                    NavigationLink(it) { Text("ncp001-page: " + it) }
                }
            }
            .padding(.horizontal)
            .navigationTitle("ncp001-compose")
        }
    }
}

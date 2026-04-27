import SwiftUI

struct ContentView: View {
    let items = ["ncp011-i1", "ncp011-i2"]
    var body: some View {
        NavigationView {
            VStack(alignment: .leading, spacing: 10) {
                Text("ncp011-pinned").font(.headline)
                NavigationLink("ncp011-quick") { Text("ncp011-quickBody") }
                Divider()
                Text("ncp011-list").font(.headline)
                List(items, id: \.self) { it in
                    NavigationLink(it) { Text("ncp011-page: " + it) }
                }
            }
            .padding(.horizontal)
            .navigationTitle("ncp011-compose")
        }
    }
}

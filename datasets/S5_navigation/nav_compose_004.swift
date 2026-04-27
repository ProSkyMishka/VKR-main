import SwiftUI

struct ContentView: View {
    let items = ["ncp004-i1", "ncp004-i2"]
    var body: some View {
        NavigationView {
            VStack(alignment: .leading, spacing: 10) {
                Text("ncp004-pinned").font(.headline)
                NavigationLink("ncp004-quick") { Text("ncp004-quickBody") }
                Divider()
                Text("ncp004-list").font(.headline)
                List(items, id: \.self) { it in
                    NavigationLink(it) { Text("ncp004-page: " + it) }
                }
            }
            .padding(.horizontal)
            .navigationTitle("ncp004-compose")
        }
    }
}

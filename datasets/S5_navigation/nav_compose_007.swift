import SwiftUI

struct ContentView: View {
    let items = ["ncp007-i1", "ncp007-i2"]
    var body: some View {
        NavigationView {
            VStack(alignment: .leading, spacing: 10) {
                Text("ncp007-pinned").font(.headline)
                NavigationLink("ncp007-quick") { Text("ncp007-quickBody") }
                Divider()
                Text("ncp007-list").font(.headline)
                List(items, id: \.self) { it in
                    NavigationLink(it) { Text("ncp007-page: " + it) }
                }
            }
            .padding(.horizontal)
            .navigationTitle("ncp007-compose")
        }
    }
}

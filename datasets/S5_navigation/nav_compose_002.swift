import SwiftUI

struct ContentView: View {
    let items = ["ncp002-i1", "ncp002-i2"]
    var body: some View {
        NavigationView {
            VStack(alignment: .leading, spacing: 10) {
                Text("ncp002-pinned").font(.headline)
                NavigationLink("ncp002-quick") { Text("ncp002-quickBody") }
                Divider()
                Text("ncp002-list").font(.headline)
                List(items, id: \.self) { it in
                    NavigationLink(it) { Text("ncp002-page: " + it) }
                }
            }
            .padding(.horizontal)
            .navigationTitle("ncp002-compose")
        }
    }
}

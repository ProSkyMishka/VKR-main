import SwiftUI

struct ContentView: View {
    let items = ["ncp005-i1", "ncp005-i2"]
    var body: some View {
        NavigationView {
            VStack(alignment: .leading, spacing: 10) {
                Text("ncp005-pinned").font(.headline)
                NavigationLink("ncp005-quick") { Text("ncp005-quickBody") }
                Divider()
                Text("ncp005-list").font(.headline)
                List(items, id: \.self) { it in
                    NavigationLink(it) { Text("ncp005-page: " + it) }
                }
            }
            .padding(.horizontal)
            .navigationTitle("ncp005-compose")
        }
    }
}

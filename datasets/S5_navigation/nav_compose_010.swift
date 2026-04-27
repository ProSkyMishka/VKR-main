import SwiftUI

struct ContentView: View {
    let items = ["ncp010-i1", "ncp010-i2"]
    var body: some View {
        NavigationView {
            VStack(alignment: .leading, spacing: 10) {
                Text("ncp010-pinned").font(.headline)
                NavigationLink("ncp010-quick") { Text("ncp010-quickBody") }
                Divider()
                Text("ncp010-list").font(.headline)
                List(items, id: \.self) { it in
                    NavigationLink(it) { Text("ncp010-page: " + it) }
                }
            }
            .padding(.horizontal)
            .navigationTitle("ncp010-compose")
        }
    }
}

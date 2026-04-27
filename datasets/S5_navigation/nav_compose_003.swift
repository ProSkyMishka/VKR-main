import SwiftUI

struct ContentView: View {
    let items = ["ncp003-i1", "ncp003-i2"]
    var body: some View {
        NavigationView {
            VStack(alignment: .leading, spacing: 10) {
                Text("ncp003-pinned").font(.headline)
                NavigationLink("ncp003-quick") { Text("ncp003-quickBody") }
                Divider()
                Text("ncp003-list").font(.headline)
                List(items, id: \.self) { it in
                    NavigationLink(it) { Text("ncp003-page: " + it) }
                }
            }
            .padding(.horizontal)
            .navigationTitle("ncp003-compose")
        }
    }
}

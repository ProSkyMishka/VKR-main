import SwiftUI

struct ContentView: View {
    let items = ["ncp006-i1", "ncp006-i2"]
    var body: some View {
        NavigationView {
            VStack(alignment: .leading, spacing: 10) {
                Text("ncp006-pinned").font(.headline)
                NavigationLink("ncp006-quick") { Text("ncp006-quickBody") }
                Divider()
                Text("ncp006-list").font(.headline)
                List(items, id: \.self) { it in
                    NavigationLink(it) { Text("ncp006-page: " + it) }
                }
            }
            .padding(.horizontal)
            .navigationTitle("ncp006-compose")
        }
    }
}

import SwiftUI

struct Detailnd002: View {
    var body: some View {
        Text("nd002-detailScreen")
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("nd002-root")
                NavigationLink("nd002-open") { Detailnd002() }
            }
            .navigationTitle("nd002-title")
        }
    }
}

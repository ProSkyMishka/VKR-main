import SwiftUI

struct Detailnd005: View {
    var body: some View {
        Text("nd005-detailScreen")
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("nd005-root")
                NavigationLink("nd005-open") { Detailnd005() }
            }
            .navigationTitle("nd005-title")
        }
    }
}

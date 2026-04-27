import SwiftUI

struct Detailnd006: View {
    var body: some View {
        Text("nd006-detailScreen")
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("nd006-root")
                NavigationLink("nd006-open") { Detailnd006() }
            }
            .navigationTitle("nd006-title")
        }
    }
}

import SwiftUI

struct Detailnd001: View {
    var body: some View {
        Text("nd001-detailScreen")
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("nd001-root")
                NavigationLink("nd001-open") { Detailnd001() }
            }
            .navigationTitle("nd001-title")
        }
    }
}

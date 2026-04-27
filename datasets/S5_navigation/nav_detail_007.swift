import SwiftUI

struct Detailnd007: View {
    var body: some View {
        Text("nd007-detailScreen")
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("nd007-root")
                NavigationLink("nd007-open") { Detailnd007() }
            }
            .navigationTitle("nd007-title")
        }
    }
}

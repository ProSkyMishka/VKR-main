import SwiftUI

struct Detailnd010: View {
    var body: some View {
        Text("nd010-detailScreen")
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("nd010-root")
                NavigationLink("nd010-open") { Detailnd010() }
            }
            .navigationTitle("nd010-title")
        }
    }
}

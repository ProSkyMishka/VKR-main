import SwiftUI

struct Detailnd008: View {
    var body: some View {
        Text("nd008-detailScreen")
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("nd008-root")
                NavigationLink("nd008-open") { Detailnd008() }
            }
            .navigationTitle("nd008-title")
        }
    }
}

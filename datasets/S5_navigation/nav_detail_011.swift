import SwiftUI

struct Detailnd011: View {
    var body: some View {
        Text("nd011-detailScreen")
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("nd011-root")
                NavigationLink("nd011-open") { Detailnd011() }
            }
            .navigationTitle("nd011-title")
        }
    }
}

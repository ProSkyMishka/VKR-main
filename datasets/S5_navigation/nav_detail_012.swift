import SwiftUI

struct Detailnd012: View {
    var body: some View {
        Text("nd012-detailScreen")
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("nd012-root")
                NavigationLink("nd012-open") { Detailnd012() }
            }
            .navigationTitle("nd012-title")
        }
    }
}

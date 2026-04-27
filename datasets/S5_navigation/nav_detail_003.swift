import SwiftUI

struct Detailnd003: View {
    var body: some View {
        Text("nd003-detailScreen")
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("nd003-root")
                NavigationLink("nd003-open") { Detailnd003() }
            }
            .navigationTitle("nd003-title")
        }
    }
}

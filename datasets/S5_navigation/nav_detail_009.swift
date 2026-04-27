import SwiftUI

struct Detailnd009: View {
    var body: some View {
        Text("nd009-detailScreen")
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("nd009-root")
                NavigationLink("nd009-open") { Detailnd009() }
            }
            .navigationTitle("nd009-title")
        }
    }
}

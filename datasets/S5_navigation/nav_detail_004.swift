import SwiftUI

struct Detailnd004: View {
    var body: some View {
        Text("nd004-detailScreen")
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("nd004-root")
                NavigationLink("nd004-open") { Detailnd004() }
            }
            .navigationTitle("nd004-title")
        }
    }
}

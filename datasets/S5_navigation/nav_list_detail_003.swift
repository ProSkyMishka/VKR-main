import SwiftUI

struct Dnld003: View {
    let title: String
    var body: some View {
        VStack {
            Text("nld003-detail: " + title).font(.title2)
            Text("nld003-extra")
        }
    }
}

struct ContentView: View {
    let items = ["nld003-one", "nld003-two", "nld003-three"]
    var body: some View {
        NavigationView {
            List(items, id: \.self) { it in
                NavigationLink(it) { Dnld003(title: it) }
            }
            .navigationTitle("nld003-rows")
        }
    }
}

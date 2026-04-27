import SwiftUI

struct Dnld001: View {
    let title: String
    var body: some View {
        VStack {
            Text("nld001-detail: " + title).font(.title2)
            Text("nld001-extra")
        }
    }
}

struct ContentView: View {
    let items = ["nld001-one", "nld001-two", "nld001-three"]
    var body: some View {
        NavigationView {
            List(items, id: \.self) { it in
                NavigationLink(it) { Dnld001(title: it) }
            }
            .navigationTitle("nld001-rows")
        }
    }
}

import SwiftUI

struct Dnld005: View {
    let title: String
    var body: some View {
        VStack {
            Text("nld005-detail: " + title).font(.title2)
            Text("nld005-extra")
        }
    }
}

struct ContentView: View {
    let items = ["nld005-one", "nld005-two", "nld005-three"]
    var body: some View {
        NavigationView {
            List(items, id: \.self) { it in
                NavigationLink(it) { Dnld005(title: it) }
            }
            .navigationTitle("nld005-rows")
        }
    }
}

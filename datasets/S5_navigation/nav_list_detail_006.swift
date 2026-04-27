import SwiftUI

struct Dnld006: View {
    let title: String
    var body: some View {
        VStack {
            Text("nld006-detail: " + title).font(.title2)
            Text("nld006-extra")
        }
    }
}

struct ContentView: View {
    let items = ["nld006-one", "nld006-two", "nld006-three"]
    var body: some View {
        NavigationView {
            List(items, id: \.self) { it in
                NavigationLink(it) { Dnld006(title: it) }
            }
            .navigationTitle("nld006-rows")
        }
    }
}

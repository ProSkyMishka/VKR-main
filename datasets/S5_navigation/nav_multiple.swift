import SwiftUI

struct PageA: View {
    var body: some View { Text("Page A") }
}

struct PageB: View {
    var body: some View { Text("Page B") }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack(spacing: 20) {
                NavigationLink("To A") { PageA() }
                NavigationLink("To B") { PageB() }
            }
            .navigationTitle("Menu")
        }
    }
}

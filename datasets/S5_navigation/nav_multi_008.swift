import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack(spacing: 10) {
                NavigationLink("nm008-page1") { Text("nm008-body1") }
                NavigationLink("nm008-page2") { Text("nm008-body2") }
                NavigationLink("nm008-page3") { Text("nm008-body3") }
            }
            .navigationTitle("nm008-menu")
        }
    }
}

import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack(spacing: 10) {
                NavigationLink("nm004-page1") { Text("nm004-body1") }
                NavigationLink("nm004-page2") { Text("nm004-body2") }
                NavigationLink("nm004-page3") { Text("nm004-body3") }
            }
            .navigationTitle("nm004-menu")
        }
    }
}

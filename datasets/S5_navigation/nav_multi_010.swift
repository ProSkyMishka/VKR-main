import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack(spacing: 10) {
                NavigationLink("nm010-page1") { Text("nm010-body1") }
                NavigationLink("nm010-page2") { Text("nm010-body2") }
                NavigationLink("nm010-page3") { Text("nm010-body3") }
            }
            .navigationTitle("nm010-menu")
        }
    }
}

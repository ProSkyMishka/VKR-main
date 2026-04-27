import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack(spacing: 10) {
                NavigationLink("nm002-page1") { Text("nm002-body1") }
                NavigationLink("nm002-page2") { Text("nm002-body2") }
                NavigationLink("nm002-page3") { Text("nm002-body3") }
            }
            .navigationTitle("nm002-menu")
        }
    }
}

import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack(spacing: 10) {
                NavigationLink("nm011-page1") { Text("nm011-body1") }
                NavigationLink("nm011-page2") { Text("nm011-body2") }
                NavigationLink("nm011-page3") { Text("nm011-body3") }
            }
            .navigationTitle("nm011-menu")
        }
    }
}

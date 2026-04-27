import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("chip001-label")
                .font(.headline)
                .foregroundColor(.white)
                .padding(.horizontal, 11)
                .padding(.vertical, 7)
                .frame(width: 81, height: 31)
                .background(Color.purple)
                .cornerRadius(15)
                .shadow(radius: 2)
        }
        .padding()
    }
}

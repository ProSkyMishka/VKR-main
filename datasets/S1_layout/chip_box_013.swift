import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("chip013-label")
                .font(.headline)
                .foregroundColor(.white)
                .padding(.horizontal, 11)
                .padding(.vertical, 11)
                .frame(width: 93, height: 43)
                .background(Color.purple)
                .cornerRadius(21)
                .shadow(radius: 2)
        }
        .padding()
    }
}
